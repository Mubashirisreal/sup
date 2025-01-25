import React from 'react';
import { MessageSquare, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">SuperBuddy</span>
          </div>
          
          <div className="text-center max-w-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Management Experience?
            </h3>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Start Your Free Trial Today
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mb-12">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#linkedin" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#twitter" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#facebook" className="hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 SuperBuddy. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}