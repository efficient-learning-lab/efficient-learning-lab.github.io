export const title = "Hankook Lee";
export const mail = "hankook.lee [at] skku.edu";

export default function (data: Lume.Data, _helpers: Lume.Helpers) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h4 class="font-light">Assistant Professor</h4>
        <h4 class="font-light">College of Computing and Informatics, Sungkyunkwan University</h4>
      </div>
      <div>
        <h3>Biography</h3>
        Hankook Lee is an assistant professor in College of Computing and Informatics (소프트웨어융합대학) at Sungkyunkwan University. He is jointly affiliated in Department of Computer Science and Engineering (소프트웨어학과), Department of Intelligent Software (지능형소프트웨어학과), and Department of Artificial Intelligence (인공지능학과). Prior to this, he worked at LG AI Research as a Research Scientist. He completed his Ph.D. degree in the School of Electrical Engineering at KAIST, advised by Prof. Jinwoo Shin.
      </div>
      <div>
        <h3>Work Experience</h3>
        <ul>
          <li><b>Assistant Professor</b> at <b>SKKU</b>, Suwon, South Korea, Mar 2024 ~ present</li>
          <li><b>Research Scientist</b> at <b>LG AI Research</b>, Seoul, South Korea, Feb 2023 ~ Feb 2024</li>
          <li><b>Postdoctoral Researcher</b> at <b>KAIST</b>, Seongnam, South Korea, Sep 2022 ~ Feb 2023</li>
          <li><b>Visiting Student</b> at <b>Samsung Advanced Institute of Technology (SAIT)</b>, Suwon, South Korea, Jan 2020 ~ Mar 2020</li>
          <li><b>R&D Engineer</b> at <b>Watcha Inc.</b>, Seoul, South Korea, Aug 2013 ~ Dec 2014</li>
        </ul>
      </div>
      <div>
        <h3>Education</h3>
        <ul>
          <li><b>M.S./Ph.D.</b> in Electrical Engineering at <b>KAIST</b> (advisor: Prof. <a href="https://alinlab.kaist.ac.kr/shin.html">Jinwoo Shin</a>), Daejeon, South Korea, Mar 2016 ~ Aug 2022</li>
          <li><b>B.S.</b> in Mathematical Science and Computer Science at <b>KAIST</b> (double major), Daejeon, South Korea, Feb 2020 ~ Feb 2016</li>
        </ul>
      </div>
      <div>
        <h3>Academic Services</h3>
        <ul>
          <li><b>Area Chairs</b> - NeurIPS (2024~), ICML (2026~), ICLR (2027~), AAAI (2027~)</li>
          <li><b>Conference Reviewers</b> - ICLR (2020~2026), NeurIPS (2020~2023), ICML (2021~2025), AAAI (2022~2026), ICCV (2025), CVPR (2026)
            <ul>
              <li>Self-supervised Learning Workshops - ICML (2021), NeurIPS (2021, 2022, 2024) ECCV (2022)</li>
            </ul>
          </li>
          <li><b>Journal Action Editors</b> - TMLR (2024~)</li>
          <li><b>Journal Reviewers</b> - ACM TomPECS, IEEE TPAMI, JMLR, TMLR, Nature Communications</li>
        </ul>
      </div>
      <div>
        <h3>Awards</h3>
        <ul>
          <li>Qualcomm-KAIST Innovation Awards (2019)</li>
          <li>International Collegiate Programming Contest (ICPC)
            <ul>
              <li>Asia Daejeon Regional: Grand Prize (1st place, 2012), Gold Prize (2nd place, 2010)</li>
              <li>Participated in ICPC World Finals 2013</li>
            </ul>
          </li>
          <li>Korea Olympiad in Informatics (KOI) : Gold Prize (2009)</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>Email: {data.mail}</li>
          <li>Office: #85558, Corporate Collaboration Center (산학협력센터), SKKU Natural Sciences Campus</li>
        </ul>
      </div>
    </>
  );
}
