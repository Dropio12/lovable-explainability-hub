
import React, { useState } from 'react';
import { WorkflowInput } from '../components/WorkflowInput';
import { WorkflowResults } from '../components/WorkflowResults';
import { useToast } from '../hooks/use-toast';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { LogOut, Settings, Bell } from 'lucide-react';

const Index = () => {
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      description: "See you next time!",
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 animate-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header/Navigation */}
      <header className="relative border-b border-white/10 backdrop-blur-sm bg-white/30">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient-x">
              MetaAligner SquadOps
            </h2>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                Workflow Dashboard
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent mt-2 rounded-full" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-white/30 p-4 rounded-lg">
              Revolutionizing squad-level health command operations through unified AI workflows and intelligent automation
            </p>
          </div>

          <WorkflowInput onSubmit={handleWorkflowSubmit} />
          
          {results && <WorkflowResults results={results} />}
        </div>
      </main>
    </div>
  );
};

export default Index;
