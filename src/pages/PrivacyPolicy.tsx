import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                            <p className="text-muted-foreground">
                                Welcome to Dhadhan ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our app. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application and website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    <strong>Personal Information:</strong> We may collect your email address and password if you choose to create an account. However, account creation is optional, and you can browse and order from restaurants without providing these details.
                                </p>
                                <p>
                                    <strong>Usage Data:</strong> We may collect anonymous information about how you interact with our app, such as the pages you visit, the time spent on those pages, and other diagnostic data.
                                </p>
                                <p>
                                    <strong>Location Information:</strong> We do not track your real-time GPS location. Location selection within the app is done via pre-programmed drop-down options.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                <li>To provide and maintain our Service.</li>
                                <li>To manage your account (if you choose to create one).</li>
                                <li>To allow you to participate in interactive features of our Service.</li>
                                <li>To provide customer support.</li>
                                <li>To gather analysis or valuable information so that we can improve our Service using tools like Google Analytics and Firebase.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Third-Party Services</h2>
                            <p className="text-muted-foreground">
                                We use third-party services such as Google Analytics and Firebase to analyze the use of our app and improved our services. These third parties have their own privacy policies addressing how they use such information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Children's Privacy</h2>
                            <p className="text-muted-foreground">
                                Our Service generally addresses a general audience. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Payments</h2>
                            <p className="text-muted-foreground">
                                We do not process payments within the app. All transactions are handled externally or directly with the restaurants, and we do not store any payment information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy, you can contact us at: <a href="tel:+254794940900" className="text-brand hover:underline">0794940900</a>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
