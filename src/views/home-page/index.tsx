'use client'

import { Box, Typography } from '@mui/material'
import SwapCard from './components/SwapCard'
import ProvidersList from './components/ProvidersList'
import style from './style.module.scss'
import useScreenSize from '@/hooks/useScreenSize'
import { useState } from 'react'
import { CopilotChat } from "@copilotkit/react-ui";

export default function HomePage() {
  const { isMobile } = useScreenSize()
  const [isShowChat, setIsShowChat] = useState(true)
  return (
    <Box className={style.container}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <button
          onClick={() => setIsShowChat(!isShowChat)}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white 
          font-semibold tracking-wide flex items-center gap-2"
        >
          {isShowChat ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Show Swap
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Show Chat
            </>
          )}
        </button>
      </Box>
      {isShowChat ?
        <CopilotChat
          instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
          labels={{
            title: "Your Assistant",
            initial: "Hi! 👋 How can I assist you today?",
          }
          }
        />
        :
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <SwapCard />
          <ProvidersList />
        </Box>
      }
    </Box>
  )
}