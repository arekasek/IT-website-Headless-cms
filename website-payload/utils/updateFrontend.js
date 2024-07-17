import axios from "axios";

export async function revalidatePage(slug) {
  if (
    !process.env.PAYLOAD_PUBLIC_FRONTEND_SECRET ||
    !process.env.PAYLOAD_PUBLIC_FRONTEND_URL
  );

  try {
    await axios({
      method: "get",
      url: `${process.env.PAYLOAD_PUBLIC_FRONTEND_URL}/api/revalidate?secret=${process.env.PAYLOAD_PUBLIC_FRONTEND_SECRET}&slug=${slug}`,
    });
    console.log("Revalidation triggered");
  } catch (e) {
    console.log(e);
  }
}
