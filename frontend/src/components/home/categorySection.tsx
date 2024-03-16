import { Box, Typography } from "@mui/material";

const categories = [
  {
    title: "Music",
    alt: "MusicImg",
    img: "/images/categories/musicImg.svg",
  },
  {
    title: "Nightlife",
    alt: "Nightlife",
    img: "/images/categories/nightLife.svg",
  },
  {
    title: "Performing and Visual Arts",
    alt: "HealthImg",
    img: "/images/categories/performingImg.svg",
  },
  {
    title: "Holidays",
    alt: "HolidayImg",
    img: "/images/categories/holidaysImg.svg",
  },
  {
    title: "Health",
    alt: "HealthImg",
    img: "/images/categories/healthImg.svg",
  },
];

const CategorySectionTemplate = ({
  title,
  alt,
  img,
}: {
  title: string;
  alt: string;
  img: string;
}) => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    textAlign={"center"}
    justifyContent={"center"}
    alignItems={"center"}
    height={"100%"}
    mr={4}
  >
    <Box
      borderRadius={"100%"}
      // width={"auto"}
      border={{ sm: "1px solid lightblue", xs: "none" }}
      // border={"1px solid lightblue"}
      padding={{ md: "30px 35px", sm: "10px 15px", xs: "0 0" }}
      height={"50px"}
      width={"50px"}
      sx={{ ":hover": { bgcolor: "#dee5ff" } }}
    >
      <img
        src={img}
        alt={alt}
        style={{
          height: "100%",
          width: "100%",
          cursor: "pointer",
          objectFit: "contain",
        }}
      />
    </Box>
    <Typography
      maxWidth={150}
      variant={"subtitle2"}
      color={"GrayText"}
      sx={{ cursor: "pointer", fontSize: { xs: "12px" } }}
    >
      {title}
    </Typography>
  </Box>
);

function CategorySection() {
  return (
    <Box maxWidth={"xl"} minWidth={"sm"} mx={"auto"} py={5}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        sx={{ overflowX: "auto", flexWrap: "nowrap" }}
        width={"full"}
        // mx={2}
        pl={{ sm: 0, xs: 10 }}
      >
        {categories.map((i) => (
          <CategorySectionTemplate title={i.title} alt={i.alt} img={i.img} />
        ))}
      </Box>
    </Box>
  );
}

export default CategorySection;
