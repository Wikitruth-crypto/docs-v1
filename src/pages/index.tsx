import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  const logoSrc = useBaseUrl('/logo/logo-2.svg');
  
  return (
    <Layout
      title="WikiTruth Docs"
      description="Documentation for the privacy evidence market based on Oasis Sapphire">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img src={logoSrc} alt="WikiTruth Logo" width={120} height={120} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            WikiTruth Docs
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Documentation for the privacy evidence market based on Oasis Sapphire
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Link
            className="px-8 py-3 bg-theme text-white rounded-lg hover:opacity-80 transition text-lg font-semibold"
            to="/docs/intro">
            Start Reading
          </Link>
          <Link
            className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition text-lg font-semibold border border-white/20"
            to="/docs/overview">
            Overview
          </Link>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <Link
              to="/docs/overview"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-theme font-semibold mb-2">Overview</h3>
              <p className="text-white/70 text-sm">Understanding the core concepts and features of WikiTruth</p>
            </Link>
            <Link
              to="/docs/smart-contracts"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-theme font-semibold mb-2">Technical Documentation</h3>
              <p className="text-white/70 text-sm">Smart contract architecture and implementation</p>
            </Link>
            <Link
              to="/docs/truth-box"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-theme font-semibold mb-2">Function Details</h3>
              <p className="text-white/70 text-sm">Truth box, status mechanism, etc.</p>
            </Link>
            <Link
              to="/docs/faq"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10">
              <h3 className="text-theme font-semibold mb-2">FAQ</h3>
              <p className="text-white/70 text-sm">Answers to common questions</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

