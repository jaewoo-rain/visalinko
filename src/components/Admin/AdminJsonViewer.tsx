export default function AdminJsonViewer({ data }: { data: any }) {
    return (
        <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded-xl overflow-auto max-h-[420px]">
            {JSON.stringify(data, null, 2)}
        </pre>
    );
}
