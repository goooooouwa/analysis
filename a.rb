posts = File.read('./coolshell/posts.json')
matchData = posts.scan(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*/)
m2 = []
matchData2.each do |i|
  m2.push(i.split('/')[0])
end
File.open('./coolshell/domains.json', mode='a') { |f|
  f.write(JSON.generate(m2))
}
