import React from "react";
import SiteLayout from "../components/layout/siteLayout";

export default class About extends React.Component {
  render() {
    return (
      <SiteLayout>
        <h1 class="content-h1">About</h1>
        <div class="about-grid">
          <article class="about-grid__image-col">
            <img src="/images/about-me-portrait.jpg" />
          </article>
          <div class="about-grid__text-col">
            <div class="about-grid__text-inner ">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore uatur? Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
              <p>et quasi architecto beatae vitae dicta sunt explicabun exercitationem ullam vel eum iure reprehenderit qui in ea voluptate</p>
              <p>Sed ut perspiciatis unde omnis iste naqui ratione voluptatem sequi nesciunt. Nincidunt ut labore uatur? Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
            </div>
          </div>
        </div>
      </SiteLayout>
    );
  }
}
