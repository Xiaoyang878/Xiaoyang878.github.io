---
permalink: /publications/
title: "Publications"
description: "Publications by Xiaoyang Hou in biomolecular design, graph generation, molecular representation learning, and computational biology."
author_profile: true
---

{% assign publication_years = site.data.publications | group_by: 'year' | sort: 'name' | reverse %}
<section class="intro publications-intro" id="publications">
  <a class="back-link" href="{{ '/#publications' | relative_url }}">← Back to homepage</a>
  <h2>All publications</h2>
  <p class="archive-description">Research in machine learning, biomolecular design, and computational biology.</p>
  <nav class="publication-years" aria-label="Publication years">
    {% for year in publication_years %}<a href="#year-{{ year.name }}">{{ year.name }}</a>{% endfor %}
  </nav>
</section>

{% for year in publication_years %}
<section class="content-section publication-year" id="year-{{ year.name }}">
  <div class="section-heading"><h2>{{ year.name }}</h2><span>{{ year.items | size }} {% if year.items.size == 1 %}publication{% else %}publications{% endif %}</span></div>
  {% for paper in year.items %}
    {% include publication.html paper=paper %}
  {% endfor %}
</section>
{% endfor %}
<p class="section-note">* Equal contribution.</p>
