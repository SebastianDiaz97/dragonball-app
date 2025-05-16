import { Button, Grid } from "@chakra-ui/react";

type Props = {
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
};

function NumberPage({ totalPage, page, setPage }: Props) {
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: `repeat(${totalPage + 2}, 1fr)`,
        }}
        gap={6}
        mt={7}
      >
        <Button
          isDisabled={page === 1 ? true : false}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Anterior
        </Button>
        {pages.map((i) => (
          <Button
            key={i}
            onClick={() => {
              setPage(i);
            }}
            isActive={i === page}
             display={{ base: "none", md: "flex" }}
          >
            {i}
          </Button>
        ))}
        <Button
          isDisabled={page === totalPage ? true : false}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Siguiente
        </Button>
      </Grid>
    </>
  );
}

export default NumberPage;
