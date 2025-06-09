'use client';

import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  excerpt: string;
}

export default function SocialShare({ url, title, excerpt }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      'facebook-share-dialog',
      'width=800,height=600'
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      'twitter-share-dialog',
      'width=800,height=600'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      'linkedin-share-dialog',
      'width=800,height=600'
    );
  };

  const shareByEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(excerpt + '\n\nRead more: ' + url)}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL: ', err);
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Share this post</h3>
      <div className="flex space-x-3">
        <button
          onClick={shareOnFacebook}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={20} />
        </button>
        <button
          onClick={shareOnTwitter}
          className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={20} />
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={20} />
        </button>
        <button
          onClick={shareByEmail}
          className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
          aria-label="Share via Email"
        >
          <Mail size={20} />
        </button>
        <button
          onClick={copyToClipboard}
          className={`p-2 rounded-full ${
            isCopied ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700'
          } text-white transition-colors relative`}
          aria-label={isCopied ? 'Copied!' : 'Copy link'}
        >
          <Link2 size={20} />
          {isCopied && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
