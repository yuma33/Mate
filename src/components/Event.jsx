import React, { useState } from 'react';
import { Plus, Calendar, FileText } from 'lucide-react';

//省略記法
const Event = ({ onTodoAdd }) => {
  const [content, setContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() && scheduledDate) {
      onTodoAdd({ content: content.trim(), scheduledDate });
      setContent('');
      setScheduledDate('');
    }
  };

  const remainingChars = 100 - content.length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-8">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="flex items-center gap-3">
          <Plus className="w-6 h-6" />
          <h2 className="text-xl font-bold">
            新しいTODOを追加
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="content" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <FileText className="w-4 h-4" />
              TODO内容
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="やることを入力してください..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all text-gray-800 placeholder-gray-400"
              rows={3}
              maxLength={100}
              required
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">最大100文字まで入力できます</span>
              <span className={`text-xs font-medium ${remainingChars < 10 ? 'text-red-500' : 'text-gray-500'}`}>
                残り{remainingChars}文字
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="scheduledDate" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Calendar className="w-4 h-4" />
              予定日
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="scheduledDate"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!content.trim() || !scheduledDate}
            className="w-full font-bold py-4 px-6 rounded-xl text-white transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-500"
          >
            TODOを追加する
          </button>
        </div>
      </form>
    </div>
  );
};

export default Event;
