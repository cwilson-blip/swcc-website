import { useEffect } from "react";

export default function DirectoryPage() {
  useEffect(() => {
    document.title = "Campus Directory | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Campus Directory</h1>
    <p className="lede">Main number: 972-524-3341</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <p className="scroll-hint">Swipe to see the full directory →</p>
    <div className="table-scroll">
      <table className="info-table">
        <thead><tr><th>Ext.</th><th>Name</th><th>Title</th><th>Email</th></tr></thead>
        <tbody><tr><td>101</td><td>Gloria Rice</td><td>Admissions / Comptroller’s Office</td><td><a href="mailto:gloria.rice@swcc.edu">gloria.rice@swcc.edu</a></td></tr><tr><td>102</td><td>Shirley Hudson</td><td>Librarian</td><td><a href="mailto:shirley.hudson@swcc.edu">shirley.hudson@swcc.edu</a></td></tr><tr><td>106</td><td>Lois Walker</td><td>Admin. Assistant, Business Office</td><td><a href="mailto:lois.walker@swcc.edu">lois.walker@swcc.edu</a></td></tr><tr><td>109</td><td>Drew Johnson</td><td>Facilities Manager</td><td><a href="mailto:drew.johnson@swcc.edu">drew.johnson@swcc.edu</a></td></tr><tr><td>110</td><td>Dwayne Pugh</td><td>Dean of Chapel</td><td><a href="mailto:dwayne.pugh@swcc.edu">dwayne.pugh@swcc.edu</a></td></tr><tr><td>111</td><td>Yalonda Coats</td><td>Police Commissioner</td><td><a href="mailto:yalonda.coats@swcc.edu">yalonda.coats@swcc.edu</a></td></tr><tr><td>112</td><td>Ben Foster</td><td>Dean of Student Affairs</td><td><a href="mailto:ben.foster@swcc.edu">ben.foster@swcc.edu</a></td></tr><tr><td>114</td><td>Alva Baker</td><td>CFO</td><td><a href="mailto:alva.baker@swcc.edu">alva.baker@swcc.edu</a></td></tr><tr><td>117</td><td>Kenny Fox</td><td>Comptroller</td><td><a href="mailto:kenny.fox@swcc.edu">kenny.fox@swcc.edu</a></td></tr><tr><td>124</td><td>Robert Morrow</td><td>Supervisor, Men’s Residence</td><td><a href="mailto:robert.morrow@swcc.edu">robert.morrow@swcc.edu</a></td></tr><tr><td>125</td><td>Charles Hanks</td><td>Kitchenette, Student Union</td><td><a href="mailto:charles.hanks@swcc.edu">charles.hanks@swcc.edu</a></td></tr><tr><td>128</td><td>Dustin White</td><td>Dining Hall Manager</td><td><a href="mailto:dustin.white@swcc.edu">dustin.white@swcc.edu</a></td></tr><tr><td>129</td><td>Kecia Baker-Morris</td><td>Asst. Director of Financial Aid / Title III</td><td></td></tr><tr><td>130</td><td>Vernesha Cathey</td><td>Athletic Director</td><td><a href="mailto:vernesha.cathey@swcc.edu">vernesha.cathey@swcc.edu</a></td></tr><tr><td>—</td><td>Registrar’s Office</td><td>Registrar</td><td><a href="mailto:registrar@swcc.edu">registrar@swcc.edu</a></td></tr></tbody>
      </table>
    </div>
  </div>
</section>

    </>
  );
}
