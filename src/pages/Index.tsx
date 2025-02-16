
import React, { useState } from 'react';
import { WorkflowInput } from '../components/WorkflowInput';
import { WorkflowResults } from '../components/WorkflowResults';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleWorkflowSubmit = async (workflow: string, userId: string) => {
    try {
      // Simulated API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setResults({
        market: "healthcare",
        confidence: 0.95,
        recommendations: [
          "Schedule daily standup",
          "Review patient data",
          "Update team dashboard"
        ]
      });

      toast({
        title: "Workflow processed successfully",
        description: "Your results are ready to view",
      });
    } catch (error) {
      toast({
        title: "Error processing workflow",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              MetaAligner SquadOps Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              This dashboard executes a unified AI workflow for squad-level health command operations.
            </p>
          </div>

          <WorkflowInput onSubmit={handleWorkflowSubmit} />
          
          {results && <WorkflowResults results={results} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
