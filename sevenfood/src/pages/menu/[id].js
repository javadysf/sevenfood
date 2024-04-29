import DetailsPage from "@/components/templates/DetailsPage";


const Details = (props) => {
  const { data } = props;
  return <DetailsPage {...data}/>;
};

export default Details;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 15);

  const paths = data.map((food) => ({ params: { id: food.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();

  return { props: { data }, revalidate: 10 };
}
