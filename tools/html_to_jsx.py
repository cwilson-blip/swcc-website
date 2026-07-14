"""Converts the body() HTML strings from tools/pages/*.py into JSX component
bodies, so the React app renders the exact same markup as the static site.
"""
import re
from html.parser import HTMLParser

VOID_ELEMENTS = {"img", "input", "br", "hr", "meta", "link", "area", "col", "embed", "source", "track", "wbr"}

ATTR_RENAME = {
    "class": "className",
    "for": "htmlFor",
    "tabindex": "tabIndex",
    "readonly": "readOnly",
    "maxlength": "maxLength",
    "autocomplete": "autoComplete",
    "autofocus": "autoFocus",
    "crossorigin": "crossOrigin",
    "srcset": "srcSet",
    "autoplay": "autoPlay",
    "playsinline": "playsInline",
}

BOOLEAN_ATTRS = {
    "autoplay", "muted", "loop", "playsinline", "disabled", "required",
    "checked", "autofocus", "readonly",
}


def style_string_to_object(style_str):
    parts = [p.strip() for p in style_str.split(";") if p.strip()]
    pairs = []
    for part in parts:
        if ":" not in part:
            continue
        key, val = part.split(":", 1)
        key = key.strip()
        val = val.strip().replace("'", "\\'")
        camel = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), key)
        pairs.append(f"{camel}: '{val}'")
    return "{{" + ", ".join(pairs) + "}}"


def rewrite_href(value):
    if value.startswith(("http://", "https://", "mailto:", "tel:")):
        return None, value
    if value.startswith("#"):
        return None, value
    # internal link, possibly with a hash fragment
    path, _, frag = value.partition("#")
    if path in ("", "index.html"):
        route = "/"
    else:
        route = "/" + path[:-5] if path.endswith(".html") else "/" + path
    if frag:
        route = route.rstrip("/") + "#" + frag if route != "/" else "/#" + frag
    return "link", route


class JSXConverter(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []
        self.uses_link = False

    def handle_starttag(self, tag, attrs):
        self._emit_tag(tag, attrs, self_close=tag in VOID_ELEMENTS)

    def handle_startendtag(self, tag, attrs):
        self._emit_tag(tag, attrs, self_close=True)

    def _emit_tag(self, tag, attrs, self_close):
        is_link = False
        parts = []
        for name, value in attrs:
            is_bool_flag = value is None
            if value is None:
                value = ""
            if is_bool_flag and name in BOOLEAN_ATTRS:
                parts.append(ATTR_RENAME.get(name, name))
                continue
            if name == "style":
                parts.append(f"style={style_string_to_object(value)}")
                continue
            if name in ("src", "poster") and tag in ("img", "video", "source") and value.startswith("assets/"):
                parts.append(f'{name}="/{value}"')
                continue
            if name == "href" and tag == "a":
                kind, route = rewrite_href(value)
                if kind == "link":
                    is_link = True
                    parts.append(f'to="{route}"')
                    continue
                else:
                    parts.append(f'href="{value}"')
                    continue
            if name in ("onclick", "onsubmit") and value.strip() == "return false;":
                evt = "onClick" if name == "onclick" else "onSubmit"
                parts.append(f"{evt}={{(e) => e.preventDefault()}}")
                continue
            jsx_name = ATTR_RENAME.get(name, name)
            escaped = value.replace('"', "&quot;")
            parts.append(f'{jsx_name}="{escaped}"')

        out_tag = "Link" if is_link else tag
        if out_tag == "Link":
            self.uses_link = True
        attr_str = (" " + " ".join(parts)) if parts else ""
        if self_close:
            self.out.append(f"<{out_tag}{attr_str} />")
        else:
            self.out.append(f"<{out_tag}{attr_str}>")
            self._tag_stack_append(tag, out_tag)

    _stack = []

    def _tag_stack_append(self, orig, out_tag):
        self._stack.append(out_tag)

    def handle_endtag(self, tag):
        if tag in VOID_ELEMENTS:
            return
        if self._stack:
            out_tag = self._stack.pop()
        else:
            out_tag = tag
        self.out.append(f"</{out_tag}>")

    def handle_data(self, data):
        if not data:
            return
        # Escape JSX-significant characters in text nodes
        text = data.replace("{", "&#123;").replace("}", "&#125;")
        self.out.append(text)

    def get_jsx(self):
        return "".join(self.out)


def convert(html_body):
    conv = JSXConverter()
    conv._stack = []
    conv.feed(html_body)
    return conv.get_jsx(), conv.uses_link
