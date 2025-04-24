import React, { useState } from 'react';
import PhoneInput from './PhoneInput';

const plans = [
  {
    id: 'demo',
    name: 'Demo',
    description: 'Try it out with limited features',
    price: 'Free',
    features: [
      'Limited to 3 calls',
      'Standard voice response',
      'Basic conversation logs'
    ],
    isPopular: false,
    color: 'bg-gray-100 border-gray-300'
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Perfect for small businesses',
    price: '$49/mo',
    features: [
      'Up to 100 calls per month',
      'Enhanced voice clarity',
      'Detailed conversation analytics',
      'Email notifications'
    ],
    isPopular: true,
    color: 'bg-blue-50 border-blue-300'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Enterprise-grade solution',
    price: '$149/mo',
    features: [
      'Unlimited calls',
      'Premium voice quality',
      'Advanced analytics dashboard',
      'Custom voice options',
      'Priority support'
    ],
    isPopular: false,
    color: 'bg-purple-50 border-purple-300'
  }
];

export default function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  
  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };
  
  const handleContinue = () => {
    setShowPhoneInput(true);
  };
  
  if (showPhoneInput) {
    return <PhoneInput planType={selectedPlan} />;
  }
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Select Your Plan</h2>
      
      <div className="grid gap-4 mb-6">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedPlan === plan.id 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : `border-gray-200 hover:border-blue-300 ${plan.color}`
            }`}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              {plan.isPopular && (
                <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-full font-semibold">
                  POPULAR
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-2">{plan.description}</p>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            
            <ul className="text-sm text-gray-700 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleContinue}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
      >
        Continue with {plans.find(p => p.id === selectedPlan)?.name}
      </button>
    </div>
  );
}