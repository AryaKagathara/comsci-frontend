import { GET_HOME_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";

const userProps = (props) => {
    console.log("result : ", props.result)
    return (
        <div>
            <h1 >User page (SSG)</h1>
            {/* {props.data.users.map((user) => (
                <li key={user.id}>{user.firstName}</li>
            ))} */}
        </div>
    );
}
export const getStaticProps = async () => {
    const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_HOME_PAGE_DATA, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.data.data)
        .catch(error => error);
    return {
        props: {
            result,
        }
    }
};

export default userProps;