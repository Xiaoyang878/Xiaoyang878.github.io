---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="intro" id="about-me">
  <p>I am <strong>Xiaoyang Hou</strong> (<span lang="zh">侯晓阳</span> in Chinese), a PhD candidate at <strong>École Polytechnique Fédérale de Lausanne (EPFL)</strong>, co-supervised by <strong><a class="supervisor-link" href="https://scholar.google.com/citations?user=H7Y-wqQAAAAJ&amp;hl=en">Patrick Barth</a></strong> and <strong><a class="supervisor-link" href="https://scholar.google.com/citations?user=1p9NOFEAAAAJ&amp;hl=en">Pierre Vandergheynst</a></strong>. I explore deep learning for biomolecular design and discovery.</p>
  <p>My research focuses on unified biomolecule design methods and foundation models. I develop machine learning methods at the intersection of biology and chemistry, with a particular interest in <strong>computational drug design and discovery</strong>.</p>
  <p><strong>I welcome opportunities for collaboration and academic discussion.</strong> Please feel free to <a href="mailto:{{ site.author.email }}">reach out</a> if you are interested in my research or have questions to explore.</p>
</section>

<section class="content-section" id="publications">
  <div class="section-heading publication-heading"><h2>Publications</h2><a class="view-all-link" href="{{ '/publications/' | relative_url }}">View all publications <span aria-hidden="true">→</span></a></div>
  {% assign selected_publications = site.data.publications | where: 'selected', true %}
  {% for paper in selected_publications %}
    {% include publication.html paper=paper %}
  {% endfor %}
  <p class="section-note">* Equal contribution.</p>
</section>



<section class="content-section" id="education">
  <span id="educations" class="legacy-anchor" aria-hidden="true"></span>
  <div class="section-heading"><h2>Education</h2></div>
  <div class="timeline-item"><span class="education-logo" aria-label="EPFL">EPFL</span><div><p class="date">Oct 2026 — Present</p><h3>École Polytechnique Fédérale de Lausanne (EPFL)</h3><p class="education-lab">Laboratory of Protein and Cell Engineering</p><p class="education-degree">PhD Candidate</p></div></div>
  <div class="timeline-item"><img src="{{ '/images/UCAS.png' | relative_url }}" width="44" height="44" alt="University of Chinese Academy of Sciences" loading="lazy"><div><p class="date">Sep 2022 — Jun 2025</p><h3>Institute of Computing Technology, Chinese Academy of Sciences</h3><p class="education-major">Computer Science and Technology</p><p class="education-degree">Master of Engineering</p></div></div>
  <div class="timeline-item"><img src="{{ '/images/SDU.png' | relative_url }}" width="44" height="44" alt="Shandong University" loading="lazy"><div><p class="date">Sep 2018 — Jun 2022</p><h3>Shandong University</h3><p class="education-major">Computer Science and Technology</p><p class="education-degree">Bachelor of Engineering</p></div></div>
</section>

<section class="content-section" id="internships">
  <div class="section-heading"><h2>Internships</h2></div>
  <div class="experience-item"><p class="date">Mar 2026 — Sep 2026</p><div class="experience-details"><h3><a href="https://www.epfl.ch/labs/barth-lab/">EPFL LPCE Lab ↗</a></h3><p>Research Intern</p><p>Led by Prof. Patrick Barth</p></div><p>Lausanne, Switzerland</p></div>
  <div class="experience-item"><p class="date">Mar 2025 — Sep 2025</p><div class="experience-details"><h3><a href="https://www.biogeom.com/">BioGeometry ↗</a></h3><p>Research Intern</p><p>Supervised by <em>Dr. <a href="https://scholar.google.com/citations?user=0Um1Kz0AAAAJ&amp;hl=en">Chence Shi</a></em> and <em>Prof. <a href="https://scholar.google.com/citations?user=1ir6WUEAAAAJ&amp;hl=en">Jian Tang</a></em></p></div><p>Beijing, China</p></div>
  <div class="experience-item"><p class="date">May 2022 — Aug 2022</p><div class="experience-details"><h3><a href="https://www.kujiale.com/">Manycore Tech Inc. ↗</a></h3><p>Research Intern</p><p>Supervised by <em>Prof. <a href="https://scholar.google.com/citations?hl=en&amp;user=vEcgp3AAAAAJ&amp;view_op=list_works&amp;sortby=pubdate">Zihan Zhou</a></em></p></div><p>Hangzhou, China</p></div>
</section>

<section class="content-section" id="honors-and-awards">
  <div class="section-heading"><h2>Honors &amp; awards</h2></div>
  <ul class="dated-list">
    <li><span class="date">2025</span><span>Outstanding Student, State Key Laboratory of Processor Chips, ICT</span></li>
    <li><span class="date">2023, 2024</span><span>Outstanding Student Scholarship, ICT</span></li>
    <li><span class="date">2021</span><span>Finalist Award, Mathematical Contest in Modeling (MCM)</span></li>
    <li><span class="date">2021</span><span>Innovation Scholarship, Shandong University</span></li>
    <li><span class="date">2020</span><span>Scholarship of Academic Excellence, Shandong University</span></li>
  </ul>
</section>
