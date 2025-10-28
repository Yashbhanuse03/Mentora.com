import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'; 
import { LayoutDashboard, Link } from 'lucide-react';
import { Button } from './ui/button';


 

const Header = () => {
  return (
    <div className='fixed backdrop-blur-md shadow-lg border border-gray-200 rounded-full  flex top-0 inset-x-0 max-w-4xl mx-auto justify-between items-center dark:bg-neutral-900 p-3 '>
      <div>
        <SignedIn>
          <Link href="/dashboard">
           <Button>
            <LayoutDashboard className='h-4 w-4'/>
            Industry Insights
           </Button>
          </Link>
  
        </SignedIn>
      </div>

        
        
        
        
        
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn/>
        <SignUpButton>
            <UserButton/>
        </SignUpButton>
    
    </div>
  );
};

export default Header;