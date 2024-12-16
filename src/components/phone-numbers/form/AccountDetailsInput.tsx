import React from 'react';
import { Eye, EyeOff, RefreshCw } from 'lucide-react';
import { generateRandomId, generateRandomToken } from '../../../utils/phoneNumberUtils';

interface AccountDetailsInputProps {
  accountSid: string;
  authToken: string;
  onAccountSidChange: (value: string) => void;
  onAuthTokenChange: (value: string) => void;
}

const AccountDetailsInput = ({
  accountSid,
  authToken,
  onAccountSidChange,
  onAuthTokenChange
}: AccountDetailsInputProps) => {
  const [showAuthToken, setShowAuthToken] = React.useState(false);

  const generateNewId = () => {
    onAccountSidChange(generateRandomId());
  };

  const generateNewToken = () => {
    onAuthTokenChange(generateRandomToken());
  };

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Account SID *</span>
        <div className="mt-1 relative">
          <input
            type="text"
            className="block w-full font-mono pr-10"
            placeholder="Enter Account SID..."
            value={accountSid}
            onChange={(e) => onAccountSidChange(e.target.value)}
          />
          <button
            type="button"
            onClick={generateNewId}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            title="Generate Random ID"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-1 text-xs text-slate-500">
          A unique identifier for your account (32 characters)
        </p>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Auth Token *</span>
        <div className="mt-1 relative">
          <input
            type={showAuthToken ? 'text' : 'password'}
            className="block w-full font-mono pr-20"
            placeholder="Enter Auth Token..."
            value={authToken}
            onChange={(e) => onAuthTokenChange(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              onClick={generateNewToken}
              className="pr-2 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              title="Generate Random Token"
            >
              <RefreshCw className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setShowAuthToken(!showAuthToken)}
              className="pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              title={showAuthToken ? 'Hide Token' : 'Show Token'}
            >
              {showAuthToken ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <p className="mt-1 text-xs text-slate-500">
          Your authentication token (32 characters)
        </p>
      </label>
    </div>
  );
};

export default AccountDetailsInput;