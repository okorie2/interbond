import { Box } from "@chakra-ui/react";
import styles from "./PostContent.module.css";

const archiveGroups = {
  "the-future-with-sonny-as-king": [
    ["sonny_extra.jpeg", "A quiet portrait from the royal archive"],
    ["sonny_extra2.jpeg", "Chief Sonny Nlewedim in conversation"],
    ["sonny_extra3.jpeg", "A formal moment from the collection"],
    ["sonny_extra4.mp4", "Moving images from the presentation"],
  ],
  "chief-sonny-is-now-king": [
    ["sonny_extra5.jpeg", "The presentation gathers momentum"],
    ["sonny_extra6.jpeg", "A close look at the ceremony"],
    ["sony_extra8.jpeg", "Guests arrive for the occasion"],
    ["sonny_extra7.mp4", "A moment from the gathering"],
    ["sonny_extra9.mp4", "The community celebrates together"],
  ],
  "what-led-chief-sonny-to-kingship": [
    ["sonny_extra10.mp4", "A reflective moment from the archive"],
    ["sonny_extra11.jpeg", "Chief Sonny Nlewedim among guests"],
    ["sonny_extra12.mp4", "The room comes together"],
    ["sonny_extra13.jpeg", "A portrait from the occasion"],
    ["sonny_extra14.jpeg", "A frame from the community story"],
  ],
  "who-speaks-for-ndi-igbo": [
    ["sonny_extra15.jpeg", "A warm exchange from the archive"],
    ["sonny_extra16.jpeg", "A considered portrait"],
    ["sonny_extra17.jpeg", "The archive in full colour"],
    ["sonny_extra18.jpeg", "A candid moment between conversations"],
  ],
  "reaping-the-gains": [
    ["sonny_extra20.mp4", "The gathering continues"],
    ["sonny_extra21.jpeg", "A still from the wider story"],
    ["sonny_extra22.mp4", "Voices and movement from the archive"],
    ["sonny_extra23.mp4", "A closing moment from the archive"],
    ["sonny_extra24.mp4", "The final frame from the collection"],
  ],
};

function ArchiveGallery({ slug }) {
  const group = archiveGroups[slug];

  if (!group) return null;

  return (
    <section className={styles.archive} aria-label="Sonny Nlewedim archive">
      <div className={styles.archiveHeading}>
        <span className={styles.archiveKicker}>From the archive</span>
        <h2>Moments beyond the page</h2>
        <p>A visual record of the people, places and occasions behind this story.</p>
      </div>
      <div className={styles.archiveGrid}>
        {group.map(([fileName], index) => {
          const isVideo = fileName.endsWith(".mp4");
          const source = `/assets/images/${fileName}`;

          return (
            <figure className={styles.archiveItem} key={fileName}>
              <div className={styles.archiveMedia}>
                {isVideo ? (
                  <video src={source} controls muted playsInline preload="metadata" />
                ) : (
                  <img src={source} alt="Sonny Nlewedim archive" loading="lazy" />
                )}
                <span className={styles.archiveNumber}>{String(index + 1).padStart(2, "0")}</span>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

function PostContent({ content, slug }) {
  return (
    <>
      <Box
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      ></Box>
      <ArchiveGallery slug={slug} />
    </>
  );
}

export default PostContent;
