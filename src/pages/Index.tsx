
import React, { useState } from 'react';
import { WorkflowInput } from '../components/WorkflowInput';
import { WorkflowResults } from '../components/WorkflowResults';
import { useToast } from '../hooks/use-toast';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { SettingsDialog } from '@/components/SettingsDialog';
import { NotificationsDialog } from '@/components/NotificationsDialog';

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
    <div className="min-h-screen relative overflow-hidden bg-[#000000]">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute left-60 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute right-60 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* Header with glassmorphism */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gradient-gold">
              xAi
            </h2>
            <div className="flex items-center gap-4">
              <NotificationsDialog />
              <SettingsDialog />
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="text-primary hover:text-accent transition-all duration-200 hover:scale-105"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold tracking-tight">
              <span className="text-gradient-gold">
                xAi Dashboard
              </span>
            </h1>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto leading-relaxed">
              <span className="glass-gold inline-block p-6 rounded-2xl">
                Revolutionizing AI workflows through unified automation and intelligent operations
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-2xl transform rotate-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10 rounded-2xl transform -rotate-1" />
            <div className="relative">
              <WorkflowInput onSubmit={handleWorkflowSubmit} />
            </div>
          </div>
          
          {results && <WorkflowResults results={results} />}
        </div>
      </main>
    </div>
  );
};

export default Index;
