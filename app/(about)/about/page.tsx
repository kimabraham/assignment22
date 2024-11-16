export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">About us</h1>
      <p className="text-base md:text-xl whitespace-pre-wrap leading-10">
        Welcome to the official explorer for the New York Times Best Seller list
        explorer.
        <br />
        We hope you enjoy your stay!
      </p>
    </>
  );
}
