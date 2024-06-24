import aboutImage from "../../assets/img/home/testAb.jpg";

export default function About() {
  return (
    <div id="about" className="p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-16">
        <div className="flex flex-col justify-center gap-8">
          <p className="text-4xl font-medium">¿Qué hacemos?</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <img className="h-full" src={aboutImage} loading="lazy" />
      </div>
    </div>
  );
}
