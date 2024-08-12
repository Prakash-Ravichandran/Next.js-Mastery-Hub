const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(`fetching data =` + data);
  
    return data;
  };
  


export default async function SSRComponent() {
  const  todos = await getData();

  return (
    <>
      {todos?.length == 0 ? (
        <p className="route"> Loading ...</p>
      ) : (
        <p className="route"> *** Page is rendered with SSR data ***</p>
      )}
      {todos?.map((item) => (
        <p key={item.key} className={"route"}>
          Todo item {item.id}. - {item.title}
        </p>
      ))}
    </>
  );
}


