import MenuPage from "@/components/templates/menupage"

const index = ({data}) => {
  return (
    <MenuPage data={data} />
  )
}



export default index

export async function getStaticProps()
{
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  console.log(data);

  return {
    props:{data},
    revalidate: 10
  }
}