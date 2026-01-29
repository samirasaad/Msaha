import { useGetUsersQuery } from "@/features/Users/services/usersApi";

interface Props {}

function Users(props: Props) {
  const {} = props;

  const { data, isLoading, error } = useGetUsersQuery();
  console.log(data);
  // if (isLoading) return <Loader />;
  // if (error) return <Error />;

  // handle generally from interceptors
  if (isLoading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      <h1>Users Page</h1>
    </div>
  );
}

export default Users;
