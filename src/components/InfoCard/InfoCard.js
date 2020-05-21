import React from "react";

const InfoCard = () => (
  <>
    <h1>Barnabás Molnár</h1>
    <p>Full-stack developer</p>
    <dl>
      <div>
        <dt class="sr-only">Residence, place of work</dt>
        <dd>Sopron, HU</dd>
        <dd>Works remote</dd>
      </div>
      <div>
        <dt class="sr-only">LinkedIn profile</dt>
        <dd>
          <a href="#">barni.dev</a>
        </dd>
      </div>
      <div>
        <dt class="sr-only">Github profile</dt>
        <dd>
          <a href="#">barnabasmolnar</a>
        </dd>
      </div>
    </dl>
  </>
);

export default InfoCard;
