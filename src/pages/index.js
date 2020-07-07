import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import topImage from "../images/top-image.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="フィットネス指導者 &amp; Webエンジニア 青木宏和（HIROTO）｜dev.hiroto-aoki.com"
      />

      <section className="text-center">
        <h1 className="mb-4 text-5xl text-gray-800">
          Hiking Developer
        </h1>
        <p className="mb-4 text-base font-bold text-gray-800">
        ー フィットネス と Web を開発する ー 
        </p>
        <img className="lg:w-1/2 md:w-1/2 mx-auto mb-8" src={topImage} alt="トップイメージ" />
        <p className="my-2 text-base text-gray-800">
          フィットネス指導者 &amp; Webエンジニア
        </p>
        <p className="my-2 text-2xl font-bold text-gray-800">
        青木宏和（HIROTO）
        </p>
        <button className="px-4 py-2 mx-2 my-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600 justify-center">
          <a href="/about">
            ABOUT ME
          </a>
        </button>
        <button className="px-4 py-2 mx-2 my-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600 justify-center">
          <a href="/career">
            MY CAREER
          </a>
        </button>
      </section>
    </Layout>
  );
}

export default IndexPage;