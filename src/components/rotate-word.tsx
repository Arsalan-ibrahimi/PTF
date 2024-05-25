import WordRotate from "@/components/ui/word-rotate";

export  default  function TextRevealDemo() {
  return (
    <WordRotate
      className="lg:text-xl md:text-lg sm:text-md m-0  p-0  text-black dark:text-white"
      words={[
        "Programmer",
        "WordPress Developer",
        "Tech Enthusiast",    
        "Figma Designer",
        "Database Designer"
      ]}
    />
  );
}
