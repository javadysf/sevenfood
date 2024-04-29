import MenuPage from "@/components/templates/menupage";

const index = ({ data }) => {
  return <MenuPage data={data} />;
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
}
