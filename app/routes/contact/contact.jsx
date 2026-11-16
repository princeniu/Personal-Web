import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { contactContent as enContact } from '~/data/site-content';
import { contactContent as zhContact } from '~/data/content/zh/site-content';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useEffect, useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData } from '@remix-run/react';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname, localizePath } from '~/i18n/route';
import config from '~/config.json';
import { MAX_EMAIL_LENGTH, MAX_MESSAGE_LENGTH } from './contact-validation.js';

import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: enContact.metaDescription,
    path: '/contact',
  });
};

export const Contact = () => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const content = locale === 'zh' ? zhContact : enContact;
  const errorRef = useRef();
  const routeActionData = useActionData();
  const [submissionResult, setSubmissionResult] = useState();
  const [sending, setSending] = useState(false);
  const submittingRef = useRef(false);
  const activeRequestRef = useRef();
  const actionData = submissionResult || routeActionData;
  const email = useFormInput(routeActionData?.values?.email || '');
  const message = useFormInput(routeActionData?.values?.message || '');
  const initDelay = tokens.base.durationS;

  useEffect(() => () => activeRequestRef.current?.abort(), []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setSending(true);
    setSubmissionResult(undefined);
    const body = new FormData(event.currentTarget);
    const controller = new AbortController();
    activeRequestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(`/api/contact?locale=${locale}`, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok && !result.errors) throw new Error('Unconfirmed delivery');
      setSubmissionResult(result);
    } catch {
      setSubmissionResult({ errors: { form: content.failedMessage } });
    } finally {
      clearTimeout(timeout);
      activeRequestRef.current = undefined;
      submittingRef.current = false;
      setSending(false);
    }
  }

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <Form
            viewTransition
            className={styles.form}
            method="post"
            onSubmit={handleSubmit}
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText
                text={content.title}
                start={status !== 'exited'}
                delay={300}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            {/* Hidden honeypot field to identify bots */}
            <Input
              className={styles.botkiller}
              label="Name"
              name="name"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label={content.emailLabel}
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
              error={email.error || (email.value === actionData?.values?.email ? actionData?.errors?.email : undefined)}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label={content.messageLabel}
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
              error={message.error || (message.value === actionData?.values?.message ? actionData?.errors?.message : undefined)}
            />
            <Transition
              unmount
              in={!sending && actionData?.errors}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  role="alert"
                  aria-live="polite"
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {[
                        actionData?.errors?.form,
                        actionData?.errors?.email,
                        actionData?.errors?.message,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText={content.sendingLabel}
              icon="send"
              type="submit"
            >
              {content.sendLabel}
            </Button>
            <p
              className={styles.privacyNote}
              data-status={status}
              style={getDelay(tokens.base.durationL, initDelay)}
            >
              {content.privacyNote}
            </p>
            <div className={styles.directContact}>
              <p>{content.directContactLabel}</p>
              <div className={styles.directContactLinks}>
                <a href={`mailto:${config.email}`}>
                  {content.emailLinkLabel}: {config.email}
                </a>
                <a href={`https://www.linkedin.com/in/${config.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {content.linkedinLinkLabel}
                </a>
              </div>
            </div>
          </Form>
        )}
      </Transition>
      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              {content.successTitle}
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              {content.successBody}
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href={localizePath('/', locale)}
              icon="chevron-right"
            >
              {content.backLabel}
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
