import RenderBlocks from "@/utils/RenderBlocks";
import React from "react";
import axios from "axios";

const Page = ({ page }) => {
  return (
    <>
      <RenderBlocks layout={page.layout} />
    </>
  );
};

export const getStaticPaths = async () => {
  const pageReq = await axios.get("http://localhost:4000/api/pages?limit=100");
  const pageData = pageReq.data;
  const returnObj = {
    paths: pageData.docs.map(({ slug, id }) => {
      return {
        params: { slug: slug !== "index" ? slug.split("/") : false },
      };
    }),
    fallback: false,
  };
  return returnObj;
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || "index";
  const pageReq = await axios.get(
    `http://localhost:4000/api/pages?where[slug][equals]=${slug}`
  );
  const pageData = pageReq.data.docs[0];

  return {
    props: {
      page: pageData,
    },
  };
};

export default Page;
