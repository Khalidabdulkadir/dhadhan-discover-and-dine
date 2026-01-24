import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DeleteAccount = () => {
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
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Request Account Deletion</h1>

                    <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                        <section>
                            <p className="text-xl text-muted-foreground">
                                We respect your privacy and your right to control your data. If you wish to delete your Dhadhan account and associated data, please follow the steps below.
                            </p>
                        </section>

                        <section className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Request Deletion</h2>
                            <ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
                                <li>
                                    <span className="font-medium text-foreground">Contact Us:</span> Call our support team at <a href="tel:+254794940900" className="text-brand hover:underline font-medium">0794940900</a>.
                                </li>
                                <li>
                                    <span className="font-medium text-foreground">Verify Identity:</span> You will be asked to provide the phone number associated with your account to verify ownership.
                                </li>
                                <li>
                                    <span className="font-medium text-foreground">Processing:</span> Once verified, your account deletion request will be processed within <strong>30 days</strong>.
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data That Will Be Deleted</h2>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                <li>Your account profile (Name, email).</li>
                                <li>Any other personal data associated with your account.</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DeleteAccount;
