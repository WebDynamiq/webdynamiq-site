import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Webdynamiq.",
};

export default function TermsPage() {
  return (
    <div className="container px-4 md:px-8 mx-auto max-w-3xl py-20">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. 
          If you do not agree with these terms, you are prohibited from using or accessing this site.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the materials (information or software) on Webdynamiq's website for personal, 
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on Webdynamiq's website are provided on an 'as is' basis. Webdynamiq makes no warranties, expressed or implied, 
          and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
          fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitations</h2>
        <p className="mb-4">
          In no event shall Webdynamiq or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
          or due to business interruption) arising out of the use or inability to use the materials on Webdynamiq's website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of Belgium and you irrevocably submit to the 
          exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
}
