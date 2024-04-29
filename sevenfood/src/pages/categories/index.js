import CategoriesPage from "@/components/templates/CategoriesPage";

const index = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default index;

export async function getServerSideProps(context) {
  const { difficulty, time } = context?.query;
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const filteredData = data.filter((food) => {
    const filteredDifficulty = food.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );
    const filteredTime = food.details.filter((detail) => {
      const CockingTime = detail["Cooking Time"] || "";
      const [Time] = CockingTime.split(" ");
      if (+Time <= 30 && time === "less" && Time) return detail;
      else if (+Time >= 30 && time === "more" && Time) return detail;
    });
    if (time && difficulty && filteredDifficulty.length && filteredTime.length)
      return food;
    else if (!time && difficulty && filteredDifficulty.length) return food;
    else if (time && !difficulty && filteredTime.length) return food;
  });

  return { props: { data: filteredData } };
}
