
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, we'll just navigate to the dashboard
    toast({
      title: "Successfully logged in",
      description: "Welcome to MetaAligner SquadOps",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 animate-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <Card className="relative w-full max-w-md mx-4 overflow-hidden backdrop-blur-md bg-white/40 border border-white/50 shadow-xl animate-fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="relative p-8">
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/70 border-white/50 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="bg-white/70 border-white/50 backdrop-blur-sm"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Sign In
            </Button>

            <div className="text-center text-sm text-gray-600">
              <a href="#" className="hover:text-primary transition-colors">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
