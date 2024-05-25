import IconCloud from "@/components/ui/cloud-icon";

const slugs = [
  "typescript",
  "javascript",
  "react",
"wordpress",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
 "mysql",
 "mongodb",
 "postman",
 "vim",
 "xcode",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "androidstudio",
  "vscode",
  "figma",
  "adobexd"
];

export default function IconCloudDemo() {
  return (
    <div className=" flex h-full w-full  items-center justify-center  px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
