export default function DynamicRouteComponent({params}){
    return(<>
       <p>{`This page is a dynamic route - ${params.slug}`}</p>
    </>);
}