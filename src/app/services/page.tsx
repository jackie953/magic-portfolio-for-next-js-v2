import React from 'react';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="prose prose-lg">
          <p>
            Describe your services here. This page will have the same styling as your Projects page 
            but will focus on the services you offer.
          </p>
          
          {/* You can add service cards or sections here similar to your projects layout */}
          <div className="grid gap-8 mt-12">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Service 1</h3>
              <p>Description of your first service...</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Service 2</h3>
              <p>Description of your second service...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}