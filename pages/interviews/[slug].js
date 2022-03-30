import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import Link from "next/link";
import PostContent from "../../components/PostContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer.jsx";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return (
      <Box>
        <Heading>Oops, page not found!</Heading>
      </Box>
    );
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Head>
        <title>Sonny Nlewedim</title>
        <meta name="description" content={post.description} />
      </Head>

      <Box
        bg="#F7FAFC"
        shadow="md"
        position="sticky"
        top="0"
        w="100%"
        py="1rem"
        px="2rem"
        zIndex="10"
      >
        <Header />
      </Box>
      <Box pt="3rem" as="article" mx="10%">
        <Flex display={{ base: "block", lg: "flex" }}>
          <Box width={{ base: "100%", lg: "70%" }}>
            <Box>
              <Heading mb="1rem">{post.title}</Heading>
              <Img src={post.heroImage} />
            </Box>

            <PostContent content={post.content} />
          </Box>
          <Fragment>
            <Box
              position={{ base: "relative", lg: "fixed" }}
              right="0"
              top="30%"
              width={{ base: "100%", lg: "30%" }}
              pr="3rem"
            >
              <Heading mb="1rem" size="md" as="h4">
                More Interviews
              </Heading>
              <Box>
                {morePosts.map(({ params }, index) => {
                  return (
                    <Box key={index} mb="1rem">
                      <Link href={`/interviews/${params.slug}`}>
                        {params.title}
                      </Link>
                      <hr />
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Fragment>
        </Flex>
      </Box>
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "description",
    "content",
    "ogImage",
    "coverImage",
    "heroImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const { paths: staticPaths } = await getStaticPaths();
  const morePosts = staticPaths.sort(() => 0.5 - Math.random());

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: morePosts.slice(0, 5),
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug", "title"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
          title: post.title,
        },
      };
    }),
    fallback: false,
  };
}
