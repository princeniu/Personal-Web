import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { usesContent } from '~/data/site-content';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: usesContent.metaDescription,
    path: '/uses',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={usesContent.heroTitle}
          description={usesContent.heroDescription}
        />
        {usesContent.sections.map(section => (
          <ProjectSection key={section.heading} padding="none" className={styles.section}>
            <ProjectSectionContent>
              <ProjectTextRow width="m">
                <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
                <ProjectSectionText as="div">
                  <List>
                    {section.items.map(item => (
                      <ListItem key={item.label}>
                        <Link href={item.url}>{item.label}</Link> {item.description}
                      </ListItem>
                    ))}
                  </List>
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSection>
        ))}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  {usesContent.system.map(item => (
                    <TableRow key={item.label}>
                      <TableHeadCell>{item.label}</TableHeadCell>
                      <TableCell>{item.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
