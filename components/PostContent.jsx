import { Box } from "@chakra-ui/react";
import styles from "./PostContent.module.css";

function PostContent({ content }) {
  return (
    <Box
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    ></Box>
  );
}

export default PostContent;
