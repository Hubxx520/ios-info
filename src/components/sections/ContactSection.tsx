import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = `
    w-full px-4 py-3 text-base bg-background border rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent 
    transition-all duration-200 placeholder:text-secondary-400
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const errorInputStyles = `${inputStyles} border-error-500 focus:ring-error-500`;
  const validInputStyles = `${inputStyles} border-input`;

  return (
    <Section id="contact" background="muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card padding="lg">
            {submitStatus === 'success' ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  Thank you for reaching out. I&apos;ll get back to you soon!
                </p>
                <Button onClick={() => setSubmitStatus('idle')} variant="outline">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={errors.name ? errorInputStyles : validInputStyles}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      })}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-sm text-error-500" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={errors.email ? errorInputStyles : validInputStyles}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-sm text-error-500" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={errors.subject ? errorInputStyles : validInputStyles}
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    {...register('subject', {
                      required: 'Subject is required',
                      minLength: { value: 3, message: 'Subject must be at least 3 characters' },
                    })}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-sm text-error-500" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={errors.message ? errorInputStyles : validInputStyles}
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-error-500" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 rounded-lg bg-error-50 text-error-700 dark:bg-error-950/30 dark:text-error-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">Or connect with me directly</p>
          <div className="flex justify-center gap-4">
            {[
              { name: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
              { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href="#"
                className="p-3 rounded-lg bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600 dark:bg-secondary-800 dark:text-secondary-300 dark:hover:bg-primary-950/30 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit my ${social.name}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
