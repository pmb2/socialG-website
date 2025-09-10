"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { AlertTriangle, X } from "lucide-react"

interface BetaDisclaimerModalProps {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
}

export function BetaDisclaimerModal({ isOpen, onClose, onContinue }: BetaDisclaimerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-[95%] max-w-[95%] sm:max-w-[500px] rounded-xl p-4 sm:p-6"
        closeButton={false}
      >
        {/* Close Button */}
        <div className="absolute right-4 top-4 z-10">
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0 rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>

        <DialogHeader className="text-center space-y-4 pt-4">
          {/* Warning Icon */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#FFA726] to-[#FF8A65] rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Beta Access Available
          </DialogTitle>
          
          <DialogDescription className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
            You're about to access our beta platform! Please note that Social Genius is currently in beta testing mode. 
            You may encounter bugs, limited features, or occasional downtime as we continue to improve the platform.
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-4">
          {/* Beta Features List */}
          <div className="bg-gradient-to-r from-[#FFA726]/10 to-[#C939D6]/10 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">What to expect in beta:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#FF1681] rounded-full mt-2 flex-shrink-0"></div>
                <span>Early access to cutting-edge AI features</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#C939D6] rounded-full mt-2 flex-shrink-0"></div>
                <span>Ongoing improvements and new feature releases</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#7B5DFF] rounded-full mt-2 flex-shrink-0"></div>
                <span>Direct input opportunity to shape the final product</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full mt-2 flex-shrink-0"></div>
                <span>Potential temporary service interruptions</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 rounded-full border-2 hover:bg-gray-50"
            >
              Maybe Later
            </Button>
            <Button
              onClick={onContinue}
              className="flex-1 rounded-full bg-[#C939D6] hover:bg-[#B02BC7] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Continue to Beta
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}