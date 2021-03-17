import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { Head } from "next/document";
import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import Link from "next/link";
import PostContent from "../../components/PostContent";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return (
      <Box>
        <Heading>Opps, page not found</Heading>
      </Box>
    );
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log(morePosts);
  return (
    <Fragment>
      <article>
        {/* <Head>
          <title>{post.title}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head> */}

        <Flex>
          <Box width={{ base: "100%", lg: "70%" }}>
            <Box>
              <Heading>{post.title}</Heading>
              <Img src={post.coverImage} />
            </Box>

            <PostContent content={post.content} />
          </Box>
          <Box width={{ base: "100%", lg: "30%" }}>
            {morePosts.map((post) => {
              return (
                <Box>
                  <Link href={post.slug}>{post.slug}</Link>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </article>
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const { paths: morePostsPaths } = await getStaticPaths();
  const morePosts = morePostsPaths
    .map((path) => path.params)
    .sort(() => 0.5 - Math.random());

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
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
