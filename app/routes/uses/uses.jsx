import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { usesContent as enUses } from '~/data/site-content';
import { usesContent as zhUses } from '~/data/content/zh/site-content';
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
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname } from '~/i18n/route';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: enUses.metaDescription,
    path: '/uses',
  });
};

export const Uses = () => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const content = locale === 'zh' ? zhUses : enUses;
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={content.heroTitle}
          description={content.heroDescription}
        />
        {content.sections.map(section => (
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
              <ProjectSectionHeading>{content.systemHeading}</ProjectSectionHeading>
              <Table>
                <TableBody>
                  {content.system.map(item => (
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
