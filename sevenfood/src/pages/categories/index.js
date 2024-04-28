import CategoriesPage from "@/components/templates/CategoriesPage";

const index = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default index;

export async function getServerSideProps(context) {
  const { difficulty, time } = context?.query;
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const filteredDifficulty = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    )
      if(filteredDifficulty.length && difficulty)
      return item.details.filter
  }
  
  );
  console.log(filteredData.length);

  return {
    props: { data: filteredData },
  };
}
