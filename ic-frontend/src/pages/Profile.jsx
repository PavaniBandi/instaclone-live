import Layout from "../components/Layout";

export default function Profile({ token, onLogout }) {
  return (
    <Layout token={token}>
      <div>Profile</div>
    </Layout>
  );
}
